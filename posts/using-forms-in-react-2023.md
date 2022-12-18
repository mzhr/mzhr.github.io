---
title: 'Using Forms in React 2023'
date: '2023-01-03'
---

Forms are crucial for any more complex input than simple button presses. You need validation to occur as you’re going through the form and during possible data transformation as input is given and complex submissions. Due to this there are a few ways this is done, either tied to a complex state management system such as [Redux](https://redux.js.org), or it can also handled in the component where the input data is being done, a more simpler approach.

The community seem to have moved away from timing forms to state management due to performance, coupling and complexity issues that we will mention further below. Some strong evidence for this is that the author of the most popular form library that is built on a state management system, namely, [redux form](https://redux-form.com/8.3.0/), has created another library that isn’t tied to state management, namely, [react final form](https://final-form.org/react). 

The more simple form libraries such as [react final form](https://final-form.org/react), [react-form-hooks](https://react-hook-form.com) and [formik](https://formik.org) are also more popular. Due to what has been rounded down by the broader developer community, this leaves us with a few simple, well used, form libraries to compare.

*Note: I will also mention [TComb](https://github.com/gcanti/tcomb-form-native) is another popular one but hasn’t received much support since 2018.*

As Of 2023, there are A few options;
1.	Local or basic forms built in-house
2.	[Formik](https://formik.org)
3.	[React form hooks (referred to as RHF here at times)](https://react-hook-form.com)


## Parts of a form Library/System
There are a few aspects to what constitutes an effective implemented form system, so we will detail them here as a criterion to compare the options.

### Generic UI Components 

These UI components would present the input components for the user to give their data. This could be text input, date picker, checkboxes, radio boxes, etc. On a practical level, these components change throughout the life of an application due to rapid technology changes in the Front-End space. Sometimes these also come from design systems such as [MUI](https://mui.com) or [React Native Paper](https://reactnativepaper.com) and so It never makes sense to constitute this as part of the forms. But it’s important to consider how forms handle different types of components.

### Form Handlers 

This is defined as the core form system, consisting of default values, storing inputs as passed from components and submitting the data itself. These are the parts that would constitute the majority of the libraries of [Formik](https://formik.org) and [RHF](https://react-hook-form.com). Another crucial factor is linking all the other pieces together, as this system handles all the data and callbacks.

### Validation 

A simple data processor with predefined rules that returns error values depending on the inputs given. This is crucial for checking inputs since text input and others, are super complicated. This could also be crucial for dependent values such as selecting the correct state for the matching country. This could be further used to block certain inputs, or submission.

### Screens or Containers 

All of the above will be tied together here, such as a Form screen defining the form system and its corresponding components and validation. Most of this is done by the developer by linking each part together and describing how they work, for example, choosing to render a loading UI while the form is asynchronously submitting its input data.

## Form Libraries

Ultimately Screens and containers are unique to each project, and the Generic UI components are also project or library dependent. The main decision factor is which form + validation system to use. We will skip using a custom solution as we found on a practical level that the two most popular form libraries should suffice in most developer situations!

And because of this, developers should be considering either [Formik](https://formik.org) or [RHF](https://react-hook-form.com). Let's look at them now.


### [react-form-hooks](https://react-hook-form.com)

![React Hook Forms Home Page](/images/form-rhf.png "Caption text")
*[https://react-hook-form.com](https://react-hook-form.com)*

This library aims to be a jab at [Formik](https://formik.org), which is a standard in the industry by being slightly more lightweight and working as having fewer initial mounts or rerenders as it used, as such a more optimised version of [Formik](https://formik.org). They give an empirical examination of the form libraries showcasing their performance.

![Alt text](/images/form-rhf-compare.png "Caption text")
*Comparison Graph on [https://react-hook-form.com](https://react-hook-form.com)*

The bottom of the page contains an editable form demo which can see the corresponding generated React code.

Benefits looking at this include;
*	Updates to data
*	Live validation updates
*	Touched fields
*	A range of default types of values from text to email to search etc
*	Base validators such as min, max, required, max length and a regex pattern field
*	Having a demo GUI that generates react code shows simplicity in being able to generate code on the website live clearly

![RHF Example](/images/form-rhf-form.png "Caption text")
![RHF Example](/images/form-rhf-form-edit.png "Caption text")
[https://react-hook-form.com](https://react-hook-form.com)

The central premise is defining the form using `useForm` and registering components using register if it exposes its input ref; otherwise, using the `Controller` component.

```
  // TypeScipt
  type LoginFormData = {
    email: string;
    password: string;
  };

  ...
  // in component
    // Setup
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
      defaultValues: {
        email: '',
        password: '',
      }
    });
    
    // Redux store integration
    // Submit your data into Redux store, for default values get from store initially
    const onSubmit = data => props.updateAction(data);
    
    ...
    return (
    ...
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
          )}
          name="email"
        />
        {errors.email?.message && <Text>{errors.email?.message}</Text>}
    ...
    )
```

![Working RHF in an App](/images/form-rhf-example.png "Caption text")
*Working example of the forms in the app with custom input components*

They support schema-based form validation with [Yup](https://github.com/jquense/yup), [Zod](https://zod.dev), [Superstruct](https://github.com/ianstormtaylor/superstruct) & [Joi](https://joi.dev), where you can pass your schema to useForm as an optional config. It will validate your input data against the schema and return either errors or valid results.

```
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Must be valid Email')
        .required('Email is required'),
      password: yup
        .string()
        .min(8, 'Password is too short')
        .matches(/[a-zA-Z0-9]/, 'Must contain x')
        .required('Password is required'),
    })
    .required();

    ... 
      // adding it to useform object
      resolver: yupResolver(schema),
    ...
```

Their FAQ contains some useful info;
	•	Will not work in class components
	•	Contains a table comparing the three popular forms https://react-hook-form.com/faqs#ReactHookFormFormikorReduxForm



### [Formik](https://formik.org)

Ultimately this works similarly to [RHF](https://react-hook-form.com), but instead of hooks, it is an inline JSX component that takes an anonymous function with change calls and the like.

![Formik Home](/images/form-formik.png "Caption text")

As they write in their docs, their reasoning for writing [Formik](https://formik.org) was due to performance and standardisation but ultimately to tackle issues caused by redux-forms in the [overview](https://formik.org/docs/overview).

It is a simple solution in comparison to forms that the author mentions work like magic. It tries to only get values in and out of the form state, validate and return error messages, and handle the form submission.

He also mentions tracking form data in [Redux](https://redux.js.org) is unnecessary because it’s local. [Redux](https://redux.js.org) also runs entire top-level reducers every keystroke, which is not sustainable in more prominent apps. It's also much smaller (about half the size).
The following is a working example of how it may look.

```
  // Render Prop
  import React from 'react';
  import { Formik, Form, Field, ErrorMessage } from 'formik';

  const Basic = () => (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
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
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );

  export default Basic;
```

Instead of defining validation rules in an object that [RHF](https://react-hook-form.com) does if you're not using Yup, it only allows you to pass a validation callback. [Typescript integration](https://formik.org/docs/guides/typescript) is also there, but due to the form system being more baked into JSX components, it's a bit more involved in [RHF](https://react-hook-form.com).

React Native integration works similar;

```
  // Formik x React Native example
  import React from 'react';
  import { Button, TextInput, View } from 'react-native';
  import { Formik } from 'formik';

  export const MyReactNativeForm = props => (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={schema}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
```

Some Cons; It Cannot handle uncontrolled input components, and when using something like [Yup](https://github.com/jquense/yup), it doesn't provide the whole thing validation, only the first validation error.

## Overall

Both libraries are very similar, and you cannot go wrong with either. However, if you're starting from new, [RHF](https://react-hook-form.com) seems recommended due to better typescript integration and being more hook-based without much complexity. But if you are already on [Formik](https://formik.org), you should be fine too!

