/* 
? What to do?

When the page loads:
    Load 10 posts in a div with and id "posts"

    Add an event listener to Reset photos:
        which upon click, resets the photos back to 10 (aka loads agains)
    
    Add Event listeners to each of the post's delete button:
        which upon click, delete their parent element

*/

document.addEventListener("DOMContentLoaded", () => {
    // Default number of posts (used for resetting)
    const DEFAULT_POSTS = 3;

    // Returns Post Template Code
    function get_post_template(n = 0) {
        return `<div class="post"><h2 class="post-heading">Post ${n}</h2><button class="post-button">Delete</button></div>`;
    }

    // Load `n` posts in the div#posts
    function load(n) {
        // Get the divposts element
        let div_posts = document.querySelector("#posts");

        // Delete all posts from the div_posts first
        div_posts.innerHTML = "";

        for (let i = 0; i < n; i++) {
            // Add post to div_posts
            div_posts.innerHTML += get_post_template(i + 1);
        }

        // Add delete event to all post delete button
        add_delete_event();
    }

    // Deletes all posts
    function delete_all() {
        let div_posts = document.querySelector("#posts");
        div_posts.innerHTML = "";
    }

    // Resets the photos to defualt_posts number
    function reset_posts() {
        load(DEFAULT_POSTS);
    }

    // Returns all posts
    function get_all_posts() {
        return document.querySelectorAll(".post");
    }

    // Returns the last post
    function get_last_post() {
        let posts = get_all_posts();
        return posts[posts.length - 1];
    }

    // Add posts function
    function add_posts() {
        // Get the last post's number
        const posts = document.querySelectorAll(".post-heading");

        // Update the number according to posts
        let number = 0;
        if (!(posts.length === 0)) {
            // Get the last post and extract its number
            number = Number(posts[posts.length - 1].innerHTML.split(" ")[1]);
        }

        // Get div_post
        let div_post = document.querySelector("#posts");

        // Add Post
        div_post.innerHTML += get_post_template(number + 1);

        // Add delete event to all posts
        add_delete_event(); // ! Inefficient but works for now!
    }

    // Takes an element argument and removes its parent element
    function remove_parent(element) {
        element.parentElement.remove();
    }

    // This will add delete even to all delete post buttons
    function add_delete_event() {
        // Get all `post-button` buttons
        const buttons = document.querySelectorAll(".post-button");
        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                remove_parent(button);
            });
        });
    }

    // Get the add post button
    const add_post_button = document.querySelector("#add-post");
    add_post_button.addEventListener("click", add_posts);

    // Get the Delete all posts button
    const delete_posts_button = document.querySelector("#delete-posts");
    delete_posts_button.addEventListener("click", delete_all);

    // Get the reset_posts button and add click event `reset_posts`
    const reset_button = document.querySelector("#reset");
    reset_button.addEventListener("click", reset_posts);

    // Load default posts
    load(DEFAULT_POSTS);
});
