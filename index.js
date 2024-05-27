const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let cont = document.getElementById('container')

for(let i = 0; i < posts.length; i++){
    let currentPost = posts[i];

    let name = currentPost.name;
    let username = currentPost.username;
    let location = currentPost.location;
    let avatar = currentPost.avatar;
    let post = currentPost.post;
    let comment = currentPost.comment;
    let likes = currentPost.likes;


    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    img1.setAttribute('class', 'logo');
    img2.setAttribute('class', 'me');
    img1.setAttribute('src', './images/logo.png')
    img2.setAttribute('src', './images/Stefan1.jpg')
    let div_img = document.createElement('div');
    div_img.setAttribute('class', 'header');
    div_img.append(img1);
    div_img.append(img2);

    let dino = document.createElement('div');
    dino.append(div_img)


    let main = document.createElement('div');
    let user_info = document.createElement('div');
    let poste = document.createElement('img');
    let avatar_post = document.createElement('img')
    let avatar_text = document.createElement('div');
    let user_name = document.createElement('p');
    let user_location = document.createElement('p')




    main.setAttribute('class', 'main');
    poste.setAttribute('class', 'poste');
    poste.setAttribute('src', post);
    poste.setAttribute('id', 'imon')
    avatar_post.setAttribute('class', 'gogh_avatar');
    avatar_post.setAttribute('src', avatar);
    user_info.setAttribute('class', 'user-info');
    avatar_text.setAttribute('class', 'avatar_text');
    user_name.setAttribute('class', 'user_info_p1');
    user_location.setAttribute('class', 'user_info_p2');
    user_name.textContent = name;
    user_location.textContent = location;
    avatar_text.append(user_name);
    avatar_text.append(user_location);
    user_info.append(avatar_post);
    user_info.append(avatar_text);
    main.append(user_info);
    main.append(poste);

    dino.append(main);

    
    
    let foote = document.createElement('div');
    foote.setAttribute('class', 'footer');
    let images = document.createElement('div');
    images.setAttribute('class', 'images');
    let img_heart = document.createElement('img');
    let img_com = document.createElement('img');
    let img_share = document.createElement('img');
    img_heart.setAttribute('src', './images/icon-heart.png')
    img_com.setAttribute('src', './images/icon-comment.png')
    img_share.setAttribute('src', './images/icon-dm.png');
    img_heart.setAttribute('class', 'heart');
    img_com.setAttribute('class', 'come');
    img_share.setAttribute('class', 'share')
    images.append(img_heart)
    images.append(img_com);
    images.append(img_share);

    let likes_po = document.createElement('p');
    likes_po.textContent = `${likes} likes`
    likes_po.setAttribute('class', 'likes_count');

    let po_com = document.createElement('p');
    po_com.innerHTML = `<span class="author_com">${username}</span> ${comment}`
    po_com.setAttribute('class','count_com')
    foote.append(images);
    foote.append(likes_po);
    foote.append(po_com);
    dino.append(foote)


    poste.addEventListener('dblclick', ()=>{
        let likos = likes_po.textContent.split(' ');
        let likes_a = Number(likos[0]);
        likes_a += 1;
        likes_po.textContent = `${likes_a} likes`
    })

    img_heart.addEventListener('click', ()=>{
        let likos = likes_po.textContent.split(' ');
        let likes_a = Number(likos[0]);
        likes_a += 1;
        likes_po.textContent = `${likes_a} likes`
    })
    
    
    
    
    
    
    
    
    
    
    
    
    cont.append(dino);





}






