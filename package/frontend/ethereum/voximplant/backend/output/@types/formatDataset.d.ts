/**
 * Helper function that goes theough the headers of all columns
 * and returns the index of the column with the specified name
 * in row 1. If a column with that name does not exist,
 * this function returns -1. If multiple columns have the same
 * name in row 1, the index of the first one discovered is
 * returned.
 *
 * @param {string} colName The name to find in the column
 * 		headers.
 * @return The index of that column in the active sheet,
 * or -1 if the name isn't found.
 */
declare function columnIndexOf_(colName: any): number;
/**
 * Formats the sheet data, excluding the header row and column.
 * Applies the border and banding, formats the 'release_date'
 * column, and autosizes the columns and rows.
 */
declare function formatDataset(): void;
/**
 * Helper method that applies a
 * "Month Day, Year (Day of Week)" date format to the
 * indicated column in the active sheet.
 *
 * @param {number} colIndex The index of the column
 *		to format.
 */
declare function formatDates_(colIndex: any): void;
//# sourceMappingURL=formatDataset.d.ts.map
