'use client';

import { useEffect, useState } from "react";

export default function APIExemplo(){
    
    type Post = {
        id: number;
        title: string;
        body: string; 
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        }).then((data: Post[]) => {
            setPosts(data);
        })}, [])

    const [posts, setPosts] = useState<Post[]>([]);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        Id: {post.id}  Title: {post.title}  Body: {post.body}
                    </li>
                ))}
            </ul>
        </div>
    )
}