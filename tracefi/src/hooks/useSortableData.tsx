import { useState, useMemo } from "react";

type SortKey = "volume" | "tvl" | "apy" | "fees" | "platform" | null;
type SortOrder = "asc" | "desc" | null;

export function useSortableData<T extends Record<string, any>>(data: T[]) {
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const sortedData = useMemo(() => {
    if (!sortKey || !sortOrder) return data;

    const parseValue = (val: string | number) => {
      if (typeof val === "number") return val;
      if (typeof val === "string") {
        const cleaned = val.replace(/[$,%]/g, "").replace(",", "");
        const numeric = parseFloat(cleaned);
        return isNaN(numeric) ? val.toLowerCase() : numeric;
      }
      return val;
    };

    return [...data].sort((a, b) => {
      const aVal = parseValue(a[sortKey!]);
      const bVal = parseValue(b[sortKey!]);

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortOrder === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      return sortOrder === "asc"
        ? (aVal as number) - (bVal as number)
        : (bVal as number) - (aVal as number);
    });
  }, [data, sortKey, sortOrder]);

  const requestSort = (key: SortKey) => {
    if (key !== sortKey) {
      setSortKey(key);
      setSortOrder("desc");
      return;
    }
  
    if (sortOrder === "desc") {
      setSortOrder("asc");
      return;
    }
  
    if (sortOrder === "asc") {
      setSortKey(null);
      setSortOrder(null);
    }
  };

  return {
    sortedData,
    sortKey,
    sortOrder,
    requestSort,
  };
}