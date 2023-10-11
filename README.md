# Frontend Assignment 🚀

Project: Mentions component
Time provided: 2 hours
Tech stack: React + Typescript
Link to design: [Design](https://www.figma.com/file/EEmRktq44VPR3u8Lx7otOJ/Frontend-Assignment---Dropdown?type=design&t=YyUdu9qHBb3sS66T-6)

Description
This is similar to the @-mentions in X/Twitter. The user can type any text in the input element but when user types `@` then a select box should appear from which they can select an option and it should be displayed in input element. For example `Hi @Luke Skywalker may the force be with you.`. An `onChange` handler should be triggered with the input and the options selected, in a format of your choice.
 

Scrrenshots of working: 

In this as soon as user press @ it displays the list of all users importing from  data.json, and on select of any name it concatenate the name to to that position. For better ux inside the component I have used sort method to display the names in alphabetical orders.

By spending more time we can add functionality to filter the list of names, like if user starts typing after @ it will only show the names in the list that contains those character and we can also add some css to wrap this inside a container.




1.
 ![Screenshot 2023-10-11 at 5 14 25 PM](https://github.com/vaibhav-gulati/squadcast-assignment/assets/54852286/7f732356-6ea1-47c4-a5c6-cce58546ae9e)




2. 
![Screenshot 2023-10-11 at 5 14 39 PM](https://github.com/vaibhav-gulati/squadcast-assignment/assets/54852286/0aeb7f2e-963c-4a47-83f9-372134da138e)



