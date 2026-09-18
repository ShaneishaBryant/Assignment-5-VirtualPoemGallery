Explain how you used HTML tags and attributes to distinguish the different walls and poems. Why is it important to give each item a unique ID?

I used distinct id attributes to uniquely identify the <div> elements representing each exhibition wall. For the individual work, I wrapped each poem in a semantic <article> tag.  The <article> elements treat each poem as a self-contained unit. Using these unique IDs allows for me to utilize DOM structure, which allows every poem and wall to be targeted independently. 



What was the difference between what getElementById returned and what your group selection method returned?

With the getElementById it returned a single element, whereas the group selection returned a collection of elements in a node list. 