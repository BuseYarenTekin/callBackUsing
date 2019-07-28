const posts =[
  {
    title:"Başlık 1",
    body:"Lorem ipsum 1"
  },
  {
    title:"Başlık 2",
    body:"Lorem ipsum 2"
  }
]


function createPost(post,callback,callback2,callback3) {
  setTimeout(
    () => {
      posts.push(post)
      callback()
      callback2()
      callback3(posts[2],
      "Ben değişen bir başlığım",
      "Ben değişen bir body mesajıyım")
    }, 5000 )
}

//3 tane callback olacak ismi update post get post yaptıktan sonra postlardan 1 tanesini update edecek

function getPosts() {
  console.log(posts);
}

function updatePostWithArguments(post, message, bodyMessage) {
  // post.title ="Başlık Yeni Hali"
  post.title = message
  post.body = bodyMessage
}

function updatePostWithoutArgument() {
  posts[0].title ="Başlık 1 Yenilendi"
}

createPost(
  {
    title : "Başlık 3",
    body : "Lorem ipsum 3"
  },
  getPosts,
  updatePostWithoutArguments,
  updatePostWithArgument
)

