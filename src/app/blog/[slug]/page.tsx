import React from 'react';

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Blog post: {params.slug}</h1>
      <p>Post content placeholder.</p>
    </main>
  );
}
