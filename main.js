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

function getPosts() {
  console.log(posts);
}


function createPost(post,callback,callback2,callback3) {
  setTimeout(
    () => {
      posts.push(post)
      callback()
      callback2()
      callback3(posts[2])
    }, 5000 )
}

//3 tane callback olacak ismi update post get post yaptıktan sonra postlardan 1 tanesini update edecek

function updatePostWithoutArgument() {
  posts[0].title ="Başlık 1 Yenilendi"
}

function updatePostWithArguments(post) {
  post.title ="Başlık Yeni Hali"
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
