import { Formik } from "formik";

const PersonalInformation = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold">Personal Information</h1>
        <p>
          Please provide your personal details so we can get to know you better.
        </p>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="grid grid-cols-2 my-6 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="p-2 border-2 rounded-xl border-gray focus:border-salmon focus:border-2 focus:outline-none focus:ring-0 font-normal"
                placeholder="name@gmail.com"
              />
              {errors.email && touched.email && errors.email}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="p-2 border-2 rounded-xl border-gray focus:border-salmon focus:border-2 focus:outline-none focus:ring-0 font-normal"
                placeholder="name@gmail.com"
              />
              {errors.email && touched.email && errors.email}
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default PersonalInformation;
