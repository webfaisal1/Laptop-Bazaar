import React from 'react';

const FQA = () => {

  // three ask question and answer
  return (
    <div className='container pt-5 pb-5'>

      <div className='row'>
        <div className="col-md-6">
        <div classNameName="accordion ms-2 row-cols-md-6 shadow" id="accordionExample">

          {/* How React Works answer */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How reacts work...?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">আমরা যখন ReactJS ব্যবহার করি,তখন শুধুমাত্র একটি খালি ডকুমেন্ট থাকে যেখানে একটি div tag ও আইডি "root" থাকে যা আপনাকে পাঠানো হয়। রেন্ডার() পদ্ধতি ব্যবহার করে অ্যাপ্লিকেশনটি HTML DOM-এ যোগ করা হয়। ডিভ ট্যাগ ফেরত দেওয়ার জন্য একটি রিটার্ন পদ্ধতি ব্যবহার করা হয় তাই dynamic ভাবে  পুরো অ্যাপটি লোড করা হয়। সেখানে একটি ভার্চুয়াল DOM উপস্থিত রয়েছে যা React অ্যাপগুলিকে দ্রুত গতিতে অ্যাপটিকে অ্যাক্সেস/পরিবর্তন/রেন্ডার করতে দেয়৷
      </div>
    </div>
  </div>

  {/* What are the differences between props and state answer */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What are the differences between props and state...?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"> <strong>Props:</strong> <br />
      ১) Props এর ভ্যালু চেঞ্জ হবে না। 
      ২) প্রপস চাইল্ড কম্পনেন্ট ব্যবহার করতে পারে
      ৩) Props এক Component থেকে অন্য Component এর ডাটা access করতে পারে
      ৪) Stateless component এর Props থাকে <br />
                  <strong>State:</strong> <br />
      ১) State  এর ভ্যালু চেঞ্জ হবে ।
      ২) State চাইল্ড কম্পনেন্ট ব্যবহার করতে পারে না
      ৩) State Component সম্পর্কে তথ্য রাখে
      ৪) Stateful component এর State থাকে
      </div>
    </div>
  </div>

  {/* How use State work answer */}
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How use State work...?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">আমরা useState ব্যবহার করে আমাদের অভ্যন্তরীণ State ম্যানেজ করতে পারি। সাধারণত একটি প্রাথমিক মান লাগে। useState এক জোড়া মান প্রদান করে। প্রথম মান হল সেই মান যা আমরা useState-এর ভিতরে দিয়ে থাকি এবং দ্বিতীয় মান একটি ফাংশন প্রদান করে। এবং আমরা এই ফাংশন ব্যবহার করে আমাদের ডেটা পরিবর্তন করি। সাধারণভাবে আমরা সর্বদা এই দুটি মানকে দুটি ভেরিয়েবলে  destructuring এর মাধ্যমে  সেট করি। প্রতিবার এটা অবস্থা পরিবর্তন করে এবং উপাদানগুলি শেষ না হওয়া পর্যন্ত state এর মান পরিবর্তন করে
      </div>
    </div>
  </div>
</div>

        </div>
        <div className="col-md-6">
          <img width={'500px'} height={'350px'} src={'https://img.freepik.com/free-vector/faqs-concept-illustration_114360-5185.jpg?size=338&ext=jpg&ga=GA1.2.1864355548.1648299013'} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FQA;