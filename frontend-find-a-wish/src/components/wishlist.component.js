import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

const validationSchema = yup.object({
    name: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

function Wishlist () {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            organization: '',
            number: '',
            website: '', 
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const jumb_styles = {
        backgroundImage: 'URL("https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-028-plum-plate.png")',
        backgroundSize: 'cover',
    };

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
                            /*error={formik.touched.password && Boolean(formik.errors.password)}*/
                            /*helperText={formik.touched.password && formik.errors.password}*/
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
                            /*type="name"*/
                            value={formik.values.organization}
                            onChange={formik.handleChange}
                            /*error={formik.touched.password && Boolean(formik.errors.password)}*/
                            /*helperText={formik.touched.password && formik.errors.password}*/
                        />
                        <TextField
                            fullWidth
                            id="number"
                            name="number"
                            label="Number to Contact"
                            /*type="name"*/
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            /*error={formik.touched.password && Boolean(formik.errors.password)}*/
                            /*helperText={formik.touched.password && formik.errors.password}*/
                        />
                        <TextField
                            fullWidth
                            id="website"
                            name="website"
                            label="Website"
                            /*type="name"*/
                            value={formik.values.website}
                            onChange={formik.handleChange}
                            /*error={formik.touched.password && Boolean(formik.errors.password)}*/
                            /*helperText={formik.touched.password && formik.errors.password}*/
                        />
                        <div className="text-center mt-3">
                            <Button color="primary" variant="contained" type="submit" className="mr-3">
                                Submit
                            </Button>
                            <Button color="primary" variant="contained" type="reset">
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