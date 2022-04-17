import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto    text-center'>
         <div className='border border-double py-3 px-10  border-sky-400 '>
         <h1 className='text-4xl text-gray-400 '>Question 1</h1> 
           <p className='text-1xl'>
            Authentication is the process to verify the users.It works with password,email,google authentication,facebook authentication etc. It can seen by user and they can their info. <br />
            Authorization is the resources what can a user access.It's setting are maintain by the company who is the owner.This is changeable by the user it's only changeable by the company.
           </p>
         </div>
         <div className='border border-double my-9 py-3 px-10 border-sky-400 '>
         <h1 className='text-4xl text-gray-400 '>Question 2</h1> 
           <p className='text-1xl'>
                Firebase is one of the most trust-worthy Authentication system.Beacuse it is maintain by google which is a reliable tech giant in the world.Firebase secure our data and the using of this is so easy.There are some alternative of firebase like Back4App,RxDB,Kuzzle.But i don't think so they are more reliable than firebase.So i would like to use firebase in my site
           </p>
         </div>
           <div className='border border-double py-3 px-10 border-sky-400 '>
           <h1 className='text-4xl text-gray-400 '>Question 3</h1> 
           <p className='text-1xl'>
            Firebase is one of the most reliable site.Mostly we use firebase to authticate our site but there are so many services in there site. They provider so many services.They are providing Cloud Firestore, Cloud Functions,Hosting,Cloud Storage,Google Analytics Predictions,Cloud Messaging,Dynamic Links,Remote config etc.And These services help us in our app.
           </p>
           </div>
        </div>
    );
};

export default Blogs;