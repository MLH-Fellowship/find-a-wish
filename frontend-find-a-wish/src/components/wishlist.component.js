import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

/* Schema for validating all form inputs by user */
const validationSchema = yup.object({
    name: yup
        .string('Please enter your full name')
        .min(1, "Too short!")
        .max(100, "Too long!")
        .required('Full Name is required'),
    email: yup
        .string('Please enter a contact email')
        .email('Enter a valid email')
        .required('Email is required'),
    organization: yup
        .string('Please enter an organization name')
        .min(1, "Too short!")
        .required("Organization name is required"),
    organizationType: yup
        .string('Please enter an organization type')
        .min(1, "Too short!")
        .required("Organization type is required"),
    number: yup
        .string("Enter a contact number")
        .matches(
            /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
            "Invalid phone number")
        .required('Contact number is required'),
    website: yup
         .string("Please enter your organization website")  
         .matches(/((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Invalid url') 
         .required('Organization website is required'),  
    items: yup 
        .string("Please enter the items your organization needs")
        .min(1, "Not enough items")
        .required("At least one item is required")
});

function Wishlist () {
    /* Initialize empty values and formats in form */
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            organization: '',
            organizationType: '',
            number: 'XXX-XXX-XXXX',
            website: '', 
            items: '',
        },
        validationSchema: validationSchema,
        /* Log values on console for now */
        onSubmit: (values) => {
            console.log(values);
        },
    });
    /* Style to make purple jumbotron cover entire view */
    const jumb_styles = {
        backgroundImage: 'URL("https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-028-plum-plate.png")',
        backgroundSize: 'cover',
    };

  /* Form and jumbotron background */
  return (
    <Jumbotron fluid style={jumb_styles} className="vh-100">
        <Container fluid>
            <Row></Row>
            <Row className="align-items-center py-5">
                <Col lg={3}></Col>
                <Col lg={6} style={{backgroundColor: 'white'}} className="py-3">
                    <h1 className="display-4 text-center">Input your Info</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            label="Full Name"
                            type="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            id="organization"
                            name="organization"
                            label="Organization"
                            value={formik.values.organization}
                            onChange={formik.handleChange}
                            error={formik.touched.organization && Boolean(formik.errors.organization)}
                            helperText={formik.touched.organization && formik.errors.organization}
                        />
                        <TextField
                            fullWidth
                            id="organizationType"
                            name="organizationType"
                            label="Organization Type"
                            value={formik.values.organizationType}
                            onChange={formik.handleChange}
                            error={formik.touched.organizationType && Boolean(formik.errors.organizationType)}
                            helperText={formik.touched.organizationType && formik.errors.organizationType}
                        />
                        <TextField
                            fullWidth
                            id="number"
                            name="number"
                            label="Number to Contact"
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            error={formik.touched.number && Boolean(formik.errors.number)}
                            helperText={formik.touched.number && formik.errors.number}
                        />
                        <TextField
                            fullWidth
                            id="website"
                            name="website"
                            label="Website"
                            value={formik.values.website}
                            onChange={formik.handleChange}
                            error={formik.touched.website && Boolean(formik.errors.website)}
                            helperText={formik.touched.website && formik.errors.website}
                        />
                        <TextField
                            fullWidth
                            id="items"
                            name="items"
                            label="Items Needed"
                            value={formik.values.items}
                            onChange={formik.handleChange}
                            error={formik.touched.items && Boolean(formik.errors.items)}
                            helperText={formik.touched.items && formik.errors.items}
                        />
                        <div className="text-center mt-3">
                            <Button color="primary" variant="contained" type="submit" className="mr-3">
                                Submit
                            </Button>
                            <Button color="primary" variant="contained" type="reset" onClick={formik.handleReset}>
                                Reset
                            </Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
  );
};
export default Wishlist;