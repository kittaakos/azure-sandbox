export default function (what: string | undefined | null): string | undefined | null {
    if (typeof what === 'string') {
        return `${what} - foo`;
    }
    return what;
}
