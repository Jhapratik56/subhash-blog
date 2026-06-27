import Link from "next/link";


export default function BlogCard({post}){


return (

<div className="
rounded-xl
border
overflow-hidden
hover:shadow-lg
transition
">


<img

src={post.image}

alt={post.title}

className="h-52 w-full object-cover"

/>


<div className="p-6">


<p className="text-blue-600 text-sm">

{post.category}

</p>


<h2 className="text-2xl font-bold mt-2">

{post.title}

</h2>


<p className="text-gray-600 mt-3">

{post.description}

</p>



<Link

href={`/${post.slug}`}

className="
inline-block
mt-5
text-blue-600
font-semibold
">

Read Article →

</Link>


</div>


</div>

)

}