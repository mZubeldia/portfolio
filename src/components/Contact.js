const Contact = () => {
    return (
        <main class="main main_contact">

        <h2 class="page_title">Contact me</h2>
          <form action="https://formspree.io/f/xjvlvooa" method="POST" class="form_contact">
            <div class="form-group col-md-12">
              <label for="name">Full Name</label>
              <input required name="name" type="text" class="form-control" id="name" placeholder="John Smith" />
            </div>
            <div class="form-group col-md-12">
              <label for="email">Email</label>
              <input required name="email" type="email" class="form-control" id="email" placeholder="johnsmith@example.com"/>
            </div>
            <div class="form-group col-md-12">
              <label for="message">Reasons</label>
              <textarea required name="message" type="text" rows="4" class="form-control"  id="message" placeholder="I want to work with you!"></textarea>
            </div>
            <button class="myButton">Submit</button>

          </form>
    
    </main>
    );
  };
  
  export default Contact;