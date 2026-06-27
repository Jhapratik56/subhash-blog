import BlogCard from "@/components/BlogCard";
import posts from "@/data/posts";


export default function Home(){

return (

<main className="max-w-6xl mx-auto px-6 py-20">


<h1 className="text-5xl font-bold mb-10">
Latest Articles
</h1>


<div className="grid md:grid-cols-3 gap-8">


{
posts.map(post=>(

<BlogCard
key={post.id}
post={post}
/>

))
}


</div>


</main>

)

}