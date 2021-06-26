import React from 'react';
import Container from '@material-ui/core/Container';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles/AddBookmark';



const validationSchema = yup.object({
    BookmarkName: yup.string()
        .min(2, 'Too Short!')
        .max(200, 'Too Long!')
        .required('Required'),
    group: yup.string().required('Required'),
    website: yup.string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required('Please enter website'),
});

function AddBookmark(): JSX.Element {

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            BookmarkName: 'Example bookmark name',
            group: 'Select Group',
            website: 'https://example.com',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container maxWidth="sm" className={classes.containerDiv}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="BookmarkName"
                    name="BookmarkName"
                    label="Bookmark Name"
                    value={formik.values.BookmarkName}
                    onChange={formik.handleChange}
                    error={formik.touched.BookmarkName && Boolean(formik.errors.BookmarkName)}
                    helperText={formik.touched.BookmarkName && formik.errors.BookmarkName}
                />
                <TextField
                    fullWidth
                    id="website"
                    name="website"
                    label="Website"
                    type="url"
                    value={formik.values.website}
                    onChange={formik.handleChange}
                    error={formik.touched.website && Boolean(formik.errors.website)}
                    helperText={formik.touched.website && formik.errors.website}
                />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </Container>
    );
};



export { AddBookmark };