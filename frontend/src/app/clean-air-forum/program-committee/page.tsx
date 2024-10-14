'use client';
import { useForumData } from '@context/ForumDataContext';
import React from 'react';

import { Divider, MemberCard } from '@/components/ui/';

const Page = () => {
  const data = useForumData();
  console.info(data.persons);
  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-0 gap-6">
      <Divider className="bg-black p-0 m-0 h-[1px] w-full max-w-5xl mx-auto" />

      <div className="py-4">
        <h1>Program Committee</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.committee_text_section }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {data.persons.map((person: any) => (
          <MemberCard key={person.id} member={person} />
        ))}
      </div>
    </div>
  );
};

export default Page;
