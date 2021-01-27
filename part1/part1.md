1. Since i is global, it will print out the amount of times the loop looped.
2. Discounted price will print as it is global
3. FinalPrice will print as it is global
4. 50,100,150 because it's half of the prices
5. there will be an error because I is only referenced locally 
6. discounted price will not print because it is defined locally in the block
7. final price will print because it is defined within the scope of the func
8. will not print because there is an error but if it did print the values would be the same
9. const i = 0 will keep i at 0 
10. discounted price would also not change once you set it 
11. final price would stay at 0 because it's a const
12. assuming this did run, the values returned would stay at 0,0,0 since they are initially set.
13. 
    1.  student.name
    2.  student['Grad Year']
    3.  student.greeting()
    4.  student['Favorite Teacher'].name
    5.  student.courseload[0]
14. Arithmetic
    1.  32 as a string because 3 is a string and we are concatenating 2 to it
    2.  1 because - is not overloaded so all the values are converted to ints
    3.  3 because null has no integer value
    4.  3null because 3 is a string and null is concatenated to it
    5.  true is 1 so 1+3 = 4
    6.  false is 0 null is 0 + 0 = 0
    7.  3 is a string so you concatenate undefined to it to get 3undefined
    8.  NaN because we undefined becomes NaN in conversion and we are not overloading -
15. Comparison
    1.  True because dictionary comparison 2 > 1
    2.  false because dictionary comparison 1 is not greater than 2
    3.  2 is obviously equal to 2 but they are different types a == is ok for this
    4.  2 is of a different type so when we use strict comparison it will show false
    5.  true is 1 so it is not equal to 2
    6.  boolean 2 is true and therefore is the same type and value so it returns true
16. == is a regular equality check and utilizes type conversion. === is strict and checks the equality before type conversion
17. "How are you?" gets printed to the console. 2 does not equal true so hello doesn't get printed. Anything that isn't a 0 is considered true so the 2nd block is executed
18. javascript file
19. Whenever we get to line 4, we are doing a callback to doSomething. In this case, dosomething takes the number at the array and increments it by 2. Therefore we would, take 1 + 2 = 3 * 2, 2 + 2 =4 * 2 = 8 and 3 + 2 = 5 * 2 = 10. The final result would be [6,8,10]
20. javascript file
21. 1 4 3 2 in vertical order. 1 prints first because it is the first instruction, 4 prints next and 3 prints after because the timeout has a small delay even if 0 since it is determined by the browser. And 2 prints at the end since there's a set delay of 1 second.


