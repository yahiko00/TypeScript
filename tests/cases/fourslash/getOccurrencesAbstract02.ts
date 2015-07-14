/// <reference path='fourslash.ts' />

////class Animal {
////    [|abstract|] walk(): void;
////    [|abstract|] makeSound(): void;
////}


// Still highlight occurrences even though abstract methods can only appear in abstract classes
const ranges = test.ranges();
for (let r of ranges) {
    goTo.position(r.start);
    verify.occurrencesAtPositionCount(ranges.length);

    for (let range of ranges) {
        verify.occurrencesAtPositionContains(range, false);
    }
}