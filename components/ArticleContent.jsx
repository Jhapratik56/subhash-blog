export default function ArticleContent({content}){


return (

<div className="prose max-w-none">


{

content.map((section,index)=>(


<section key={index}>


<h2>

{section.heading}

</h2>



{
section.text && (

<p>
{section.text}
</p>

)
}




{
section.list && (

<ul>

{
section.list.map(item=>(

<li key={item}>
{item}
</li>

))
}

</ul>

)

}




{
section.code && (

<pre className="
bg-black
text-white
p-5
rounded-lg
overflow-x-auto
">

<code>

{section.code}

</code>


</pre>

)

}



</section>


))

}


</div>

)

}