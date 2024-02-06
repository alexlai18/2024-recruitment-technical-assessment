from dataclasses import dataclass

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int


"""
Task 1
"""
def leafFiles(files: list[File]) -> list[str]:
    parentFiles = set()
    for file in files:
        parentFiles.add(file.parent)
    
    res = []
    for file in files:
        if file.id not in parentFiles:
            res.append(file.name)
    return res


"""
Task 2
"""
from collections import Counter
def kLargestCategories(files: list[File], k: int) -> list[str]:
    categoryCounter = Counter(category for file in files for category in file.categories)
    # Lambda to sort in descending order of occurence, and then if the same, sort alphabetically
    descendingCategories = sorted(categoryCounter.keys(), key=lambda name: (-categoryCounter[name], name))
    return descendingCategories[:k]


"""
Task 3
"""
from collections import defaultdict
def largestFileSize(files: list[File]) -> int:
    # Keep traversing to find the total size of a folder/file by recursively looking through children
    res = 0

    def findTotalSize(parentFile: File) -> int:
        size = parentFile.size;
        for file in files:
            if file.parent == parentFile.id:
                size += findTotalSize(file)
        return size

    for file in files:
        res = max(findTotalSize(file), res)
    return res


if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    assert largestFileSize(testFiles) == 20992
