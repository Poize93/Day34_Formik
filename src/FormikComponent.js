import React from 'react';

class formikComponent extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // intialValue={
  //   firstName='',
  //   lastname='',
  //   email='',
  //   gender='',
  //   courses='React'
  // }
  render() {
    return (
      <>
        <h3>Formik Component</h3>
      </>
    );
  }
}

export default formikComponent;

// '<Formik
// initialValues={this.intialValue }
// validate={}
// onSubmit={}
// >
// {({
//   values,
//   errors,
//   touched,
//   handleChange,
//   handleBlur,
//   handleSubmit,
//   isSubmitting,
//   /* and other goodies */
// }) => (

// <form onSubmit={(e) => this.handleSubmit(e)}>
//   <div>
//     <label>First Name</label>
//     <input
//       type="text"
//       name="firstName"
//       value={values.firstName}

//     />{' '}
//     <br /> <br />

//   </div>
//   <div>
//     <label>Last Name</label>
//     <input
//       type="text"
//       name="lastName"
//       value={values.lastName}

//     />
//     <br />
//     <br />

//   </div>
//   <div>
//     <label>Email</label>
//     <input
//       type="text"
//       name="email"
//       value={values.email}

//     />
//     <br />

//   </div>
//   <div>
//     <label>Gender</label>
//     <input
//       type="radio"
//       name="gender"
//       value="male"
//       value={values.gender}

//     />
//     Male
//     <input
//       type="radio"
//       name="gender"
//       value="female"

//     />
//     Female
//   </div>
//   <br />
//   <br />
//   <div>
//     <label>Courses</label>
//     <select
//       name="courses"
//       value={values.courses}
//     >
//       <option value="react">React</option>
//       <option value="node">Node</option>
//       <option value="mysql">MySQL</option>
//       <option value="mongo">Mongo</option>
//     </select>
//     <br />
//     <br />
//   </div>
//   <button type="submit">Submit</button> &nbsp;
//   <button type="button">Reset</button>
// </form>

// )}
// </Formik>
