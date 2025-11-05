export default function (
  value: string | string[] | undefined,
  fallbackString?: string,
): string {
  if (Array.isArray(value)) return value.join(',')
  return value ?? fallbackString ?? ''
}
