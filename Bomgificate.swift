func bomgificate(input: String) -> String {
    return input.replacingOccurrences(of: #"(\s+)"#, with: " ", options: [.regularExpression])
        .split(separator: " ").map({
            (value: Substring) -> String in
            processWord(input: String(value)) })
        .joined(separator: " ")
}

func processWord(input: String) -> String {
    let pattern = #"[ауоыиэяюёе]"#
    let nsrange = NSRange(input.startIndex..<input.endIndex, in: input)
    let regex = try! NSRegularExpression(pattern: pattern, options: [])
    var result: String?
    regex.enumerateMatches(in: input, range: nsrange) { match, _, _ in
        guard let match = match else { return }
        if result == nil {
            result = "БОМЖ" + input.suffix(input.count - match.range.location).uppercased()
        }
    }
    return result ?? input
}
