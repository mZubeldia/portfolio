const Contact = () => {
    return (
        <main className="main main_contact">

        <h2 className="page_title">Contact me</h2>
          <form action="https://formspree.io/f/xjvlvooa" method="POST" className="form_contact">
            <div className="form-group col-md-12">
              <label for="name">Full Name</label>
              <input required name="name" type="text" className="form-control" id="name" placeholder="John Smith" />
            </div>
            <div className="form-group col-md-12">
              <label for="email">Email</label>
              <input required name="email" type="email" className="form-control" id="email" placeholder="johnsmith@example.com"/>
            </div>
            <div className="form-group col-md-12">
              <label for="message">Reasons</label>
              <textarea required name="message" type="text" rows="4" className="form-control"  id="message" placeholder="I want to work with you!"></textarea>
            </div>
            <button className="myButton">Submit</button>

          </form>
    
    </main>
    );
  };
  
  export default Contact;