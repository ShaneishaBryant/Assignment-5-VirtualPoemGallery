Explain how you used HTML tags and attributes to distinguish the different walls and poems. Why is it important to give each item a unique ID?

I used distinct id attributes to uniquely identify the <div> elements representing each exhibition wall. For the individual work, I wrapped each poem in a semantic <article> tag.  The <article> elements treat each poem as a self-contained unit. Using these unique IDs allows for me to utilize DOM structure, which allows every poem and wall to be targeted independently. 





What was the difference between what getElementById returned and what your group selection method returned?

With the getElementById it returned a single element, whereas the group selection returned a collection of elements in a node list. 






When you moved the item, did you have to manually “delete” it from the first wall? Explain what happened to the node in the DOM tree when you called the movement method.

No, I did not have to manually delete the poem from the first wall. When the movement method was called the poem was automatically detached from its original parent node and put in its new position on the East Wall. 




Describe the lifecycle of an element created with document.createElement(). Where does that element exist in memory before you call appendChild(), and at what point does it become visible on the page?

When you call document.createElement(), memory for a new DOM node is first allocated in the JavaScript engine's heap memory as an unattached object. Next, attributes, styles, and child nodes are configured on the element while it remains off-screen in memory. Once parent.appendChild(element) is called, the node is inserted into the active DOM tree — making it accessible via DOM queries and triggering the browser.


