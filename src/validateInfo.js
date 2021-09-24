export default function validateInfo(values) {
    let errors = {}

    if(!values.name){
        errors.name = "name required"
    }

    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      
    
      
      return errors;
    }