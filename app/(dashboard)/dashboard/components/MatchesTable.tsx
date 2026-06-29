"use client";

import * as React from "react";
import {
    useGetMatchesQuery,
    useSearchMatchesQuery,
} from "@/services/api/matchesApi";

import { Match, MatchSearchParams } from "@/types/match";

import { useTranslations } from "next-intl";
import { Spinner } from "@/components/Spinner";
import { PageHeader } from "@/app/(dashboard)/dashboard/components/PageHeader";

import {
    useReactTable,
    ColumnDef,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    flexRender,
    SortingState,
    ColumnFiltersState,
    VisibilityState,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

export function MatchesTable() {
    const t = useTranslations("Dashboard");

    // -----------------------
    // Search state
    // -----------------------
    const [searchParams, setSearchParams] =
        React.useState<MatchSearchParams>({
            q: "",
            seasonId: "",
            tournamentId: "",
            roundId: "",
        });

    // -----------------------
    // Table states
    // -----------------------
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] =
        React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    // -----------------------
    // Fetch data
    // -----------------------
    const { data: allData = [], isLoading: isLoadingAll } =
        useGetMatchesQuery();

    const { data: filteredData = [], isLoading: isLoadingFiltered } =
        useSearchMatchesQuery(searchParams);

    const hasFilters = Object.values(searchParams).some(Boolean);

    const data = hasFilters ? filteredData : allData;
    const isLoading = hasFilters ? isLoadingFiltered : isLoadingAll;

    // -----------------------
    // Columns
    // -----------------------
    const columns: ColumnDef<Match>[] = [
        { accessorKey: "id", header: t("id") },
        { accessorKey: "seasonId", header: t("seasonId") },
        { accessorKey: "tournamentId", header: t("tournamentId") },
        { accessorKey: "roundId", header: t("roundId") },
        { accessorKey: "date", header: t("date") },
        { accessorKey: "time", header: t("time") },
        { accessorKey: "hostScore", header: t("hostScore") },
        { accessorKey: "guestScore", header: t("guestScore") },

        {
            id: "actions",
            header: t("actions"),
            cell: ({ row }) => {
                const item = row.original;

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>
                                {t("actions")}
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            {/* later */}
                            {/* <EditMatchDialog data={item} /> */}
                            {/* <DeleteMatchDialog data={item} /> */}
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
        },
    ];

    // -----------------------
    // Table
    // -----------------------
    const table = useReactTable<Match>({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
    });

    React.useEffect(() => {
        table.setPageIndex(0);
    }, [searchParams]);

    if (isLoading) return <Spinner />;

    return (
        <div className="w-full">
            <PageHeader title={t("matches")} />

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-4">

                <div className="flex flex-col gap-1">
                    <Label>{t("seasonId")}</Label>
                    <Input
                        value={searchParams.seasonId ?? ""}
                        onChange={(e) =>
                            setSearchParams((p) => ({
                                ...p,
                                seasonId: e.target.value,
                            }))
                        }
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Label>{t("tournamentId")}</Label>
                    <Input
                        value={searchParams.tournamentId ?? ""}
                        onChange={(e) =>
                            setSearchParams((p) => ({
                                ...p,
                                tournamentId: e.target.value,
                            }))
                        }
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Label>{t("roundId")}</Label>
                    <Input
                        value={searchParams.roundId ?? ""}
                        onChange={(e) =>
                            setSearchParams((p) => ({
                                ...p,
                                roundId: e.target.value,
                            }))
                        }
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Label>{t("q")}</Label>
                    <Input
                        value={searchParams.q ?? ""}
                        onChange={(e) =>
                            setSearchParams((p) => ({
                                ...p,
                                q: e.target.value,
                            }))
                        }
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((hg) => (
                            <TableRow key={hg.id}>
                                {hg.headers.map((h) => (
                                    <TableHead
                                        key={h.id}
                                        className="text-center"
                                    >
                                        {h.isPlaceholder
                                            ? null
                                            : flexRender(
                                                h.column.columnDef.header,
                                                h.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>

                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell
                                            key={cell.id}
                                            className="text-center"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    {t("noResultsFound")}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-2 py-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                    <Button onClick={() => table.setPageIndex(0)}>
                        {t("first")}
                    </Button>

                    <Button onClick={() => table.previousPage()}>
                        {t("previous")}
                    </Button>

                    <Button onClick={() => table.nextPage()}>
                        {t("next")}
                    </Button>

                    <Button onClick={() =>
                        table.setPageIndex(table.getPageCount() - 1)
                    }>
                        {t("last")}
                    </Button>

                    <Select
                        value={String(table.getState().pagination.pageSize)}
                        onValueChange={(v) => table.setPageSize(Number(v))}
                    >
                        <SelectTrigger className="w-auto">
                            <SelectValue />
                        </SelectTrigger>

                        <SelectContent>
                            {[5, 10, 20, 50].map((s) => (
                                <SelectItem key={s} value={String(s)}>
                                    {s} {t("row")}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="text-sm text-muted-foreground">
                    {t("page")}{" "}
                    {table.getState().pagination.pageIndex + 1}{" "}
                    {t("of")} {table.getPageCount()}
                </div>
            </div>
        </div>
    );
}