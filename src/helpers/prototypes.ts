
/**
 * Extends the global `String` interface to include a `format` method.
 * The `format` method allows for string interpolation using numbered placeholders.
 * 
 * Example:
 * ```typescript
 * const greeting = "Hello, {0}! You have {1} new messages.".format("Alice", 5);
 * // greeting === "Hello, Alice! You have 5 new messages."
 * ```
 * 
 * @param args - Values to replace placeholders in the string. Each `{n}` in the string will be replaced by `args[n]`.
 * @returns A formatted string with placeholders replaced by corresponding arguments.
 */

declare global {
    interface String {
        format(...args: (string | number)[]): string;
    }
}

/**
 * Replaces numbered placeholders in a string with provided arguments.
 * 
 * @param str - The string containing `{n}` placeholders.
 * @param args - Values to replace the placeholders.
 * @returns The formatted string.
 */
function formatString(str: string, ...args: (string | number)[]): string {
    return str.replace(/{(\d+)}/g, (match, index) =>
        typeof args[index] !== "undefined" ? String(args[index]) : match
    );
}

/**
 * Implements the `format` method on the `String` prototype.
 * Delegates formatting to `formatString`.
 * 
 * @param args - Values to replace placeholders in the string.
 * @returns The formatted string.
 */
String.prototype.format = function (...args: (string | number)[]) {
    return formatString(this as string, ...args);
};

export {};
