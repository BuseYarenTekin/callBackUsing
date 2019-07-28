Asynchronous Functions

For example, we have code blocks. By running this code, we want the console to display the required values.
But we have an important problem, which can include a database or a server like the Digital Ocean. I mean, sometimes it can be difficult to get data from this server or database within seconds.
Delays may occur due to processes running in the background. Let's consider a blog site. The content of the blog site header, sidebar and footer will be static to come as it will be faster while dynamic content such as content can take time for the reasons I said. Do you think that the functions on this blog can wait for each other in order?
Of course, these functions will act independently. Here, asynchronous functions also operate in an ordinary independent manner.


In short, we have two posts in the code block. These posts include 2 posts corresponding to title and body. So what is being asked of us?
With the getPosts () function, we want to add a 3rd post.

The setTimeout function is a ready-made function. The purpose of this function is to ensure that the data coming to the console screen is displayed with a delay of 5 ms.

But here we have a problem that the delayed functions are added to the sending object has trouble adding. The callback () function is used to solve this problem. Below are the console outputs.


Likewise, this error was solved in the code block and the code block was converted into an easy and short format. In addition to the post parameter it receives to the createPost function, it is called in the timeOut function that provides the delay by taking the callback parameter and getPosts function is added without delay. Otherwise, if we continued to write the code, the data would be added by push along with the delay. This is a problem for us. However, after this code block, when the project is run, the screen is printed with the delay as direct addition.


NOTE: One reason for using the callback () reference function is that the callback function will automatically call the function for us instead of making changes to 3 different lines when a different method is wanted to be run, rather than the getPosts method.
