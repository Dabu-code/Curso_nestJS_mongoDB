## Query Show Post:

```bash
query{
  listPost{
    uuid,
    content,
    author,
    comments{
      uuid,
      author,
      content
    }
  }
}
```


## Query FindById Post:

```bash
query{
  getPost(uuid: "51ddbea4-0d2c-428a-829a-fbce5c724832"){
    uuid,
    content,
    author,
    comments{
      uuid,
      author,
      content
    }
  }
}
```

## Mutation Create Post:

```bash
mutation{
  createPost(data:{
    title: "NestJs y GraphQL",
    author: "Dabu Code",
    content: "Suscribete ahora al canal mas chevere!!"
    comments:[
      {
        author: "Dabu Code 1.5",
    		content: "Suscribete ahora al canal mas chevere!!"
      },
      {
        author:"Nuevo Dabu Code 2",
    		content:"Suscribete ahora al canal mas chevere!!"
      }
    ]
  }){
    uuid,
    content,
    author,
    comments{
      uuid,
      author,
      content
    }
  }
}
```


## Mutation Update Post:

```bash
mutation{
  updatePost(data:{
    uuid: "51ddbea4-0d2c-428a-829a-fbce5c724832",
    title: "NestJs y GraphQL v2",
    author: "Dabu Code",
    content: "Suscribete ahora al canal mas chevere!!"
    comments:[
      {
        uuid: "fe00d602-42a2-46e2-98f6-17e128062e4c",
        author:"Dabu Code 1.5",
    		content:"Suscribete ahora al canal mas chevere!!"
      },
      {
        author:"Nuevo Dabu Code 2",
    		content:"Suscribete ahora al canal mas chevere!!"
      }
    ]
  }){
    uuid,
    content,
    author,
    comments{
      uuid,
      author,
      content
    }
  }
}
```


## Mutation Delete Post:

```bash
mutation{
  updatePost(uuid: "51ddbea4-0d2c-428a-829a-fbce5c724832"){
    uuid,
    content,
    author,
    comments{
      uuid,
      author,
      content
    }
  }
}
```


## Mutation Create Comment Post:
```bash
mutation{
  createPostComment(
    uuidPost:"51ddbea4-0d2c-428a-829a-fbce5c724832",
    data:{
        author:"Nuevo comentario 23:07",
    		content:"Suscribete ahora al canal mas chevere!!"
    }
  ){
    uuid,
    author,
    content
    comments{
      uuid,
      author,
      content
    }
  }
}
```



## Mutation Update Comment Post:
```bash
mutation{
  updatePostComment(
    uuidPost:"51ddbea4-0d2c-428a-829a-fbce5c724832",
    data:{
        uuid: "fe00d602-42a2-46e2-98f6-17e128062e4c"
        author: "Nuevo comentario 23:07",
    		content: "Suscribete ahora al canal mas chevere!!"
    }
  ){
    uuid,
    author,
    content
    comments{
      uuid,
      author,
      content
    }
  }
}
```




## Mutation Delete Comment Post:
```bash
mutation{
  deletePostComment(
    uuidPost:"51ddbea4-0d2c-428a-829a-fbce5c724832",
    uuid: "4a6681e1-1542-45a3-8ef1-5fbf77544bfd",
 
  ){
     uuid,
    	author,
    content
    comments{
      uuid,
      author,
      content
    }
  }
}
```