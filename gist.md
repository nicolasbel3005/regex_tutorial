# Regex Tutorial
- Welcome to the Regex Tutorial! Regular expressions, often referred to as "regex," are powerful tools for pattern matching and text processing. In this tutorial, we will explore the world of regex and its components. Regular expressions are essential for tasks like data validation, search and replace operations, and text parsing. Whether you're a beginner looking to understand the basics or an experienced developer seeking to refine your skills, this tutorial will guide you through the fundamental elements of regex. By the end, you'll be equipped to harness the full potential of regular expressions in your programming projects.

## Summary
- In this tutorial, we will focus on a common regex pattern for validating email addresses. The regex pattern for email validation can be summarized as follows: ^[\w\.-]+@[\w\.-]+\.\w+$ This pattern checks whether a given string is a valid email address. It begins and ends with the ^ and $ anchors, ensuring that the entire string is matched. The regex consists of three main components: the local part (before the "@" symbol), the domain part (between the "@" and the last "."), and the top-level domain (e.g., ".com"). We'll break down each component to understand how this regex pattern works.

## Table of Contents
- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

-
  
## Anchors
- In regex, we use anchors to define the beginning and end of a pattern. The anchors ^ and $ are used to match the beginning and end of a string.

## Quantifiers
- In the provided email regex, quantifiers are not explicitly used, but they could be used to specify the number of characters in the local and domain parts. For example, * means zero or more, and + means one or more characters.

## Grouping Constructs
- Grouping constructs, denoted by parentheses, are used to group subpatterns together. In the email regex, you can group the local part and the domain part for better readability and potential future modifications.

## Bracket Expressions
- Bracket expressions, denoted by square brackets, are used to specify a range of characters in the local and domain parts. For example, [a-z] specifies a range of lowercase letters.

## Character Classes
- Character classes, denoted by square brackets, are used to specify a set of characters in the local and domain parts. For example, [a-z] specifies a set of lowercase letters.

## The OR Operator
- The OR operator, denoted by the pipe symbol, is used to specify a choice between two subpatterns. For example, [a-z] | [0-9] specifies a set of lowercase letters or a set of digits.

## Flags
- Flags, denoted by the forward slash and a letter, are used to modify the behavior of the regex. For example, /i specifies case-insensitive matching.

## Character Escapes
- Character escapes, denoted by backslashes, are used to specify special characters in the local and domain parts. For example, \. specifies the period character.

## References
- https://gist.github.com/nicolasbel3005/e15eee1adcb1f6ad000dbf45d11c060c

## Author
- Nicolas Esquibel