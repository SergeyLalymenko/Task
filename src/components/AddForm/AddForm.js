import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'



const validationSchema = yup.object().shape({
    description: yup.string().required('Обязательное поле!').min(3, 'Минимум 3 символа!').max(100, 'Максимум 100 символов!'),
})

function AddForm({addTodo}) {

    function getInitialValues(){
        return {
            description: '',
        }
    }

    function onFormikSubmit(values){
        addTodo(values);
    }

    function renderTextField({field, meta}){
        return (
            <TextField {...field} error={meta.error && meta.touched ? true : false} helperText={meta.touched ? meta.error : ''} label="Введите описание!" variant="outlined" size="small" color="primary"/>
        )
    }

    function renderForm(){
        return(
            <Form>
                <Grid container direction="column" alignItems="center" spacing={1}>
                    <Grid item>
                        <Field name="description">{renderTextField}</Field>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="outlined" color="primary">Добавить</Button>
                    </Grid>
                </Grid>
            </Form>
        )
    }

    return (
        <Grid container justify="center">
            <Grid item>
                <Formik initialValues={getInitialValues()} onSubmit={onFormikSubmit} validationSchema={validationSchema}>
                    {renderForm}
                </Formik>
            </Grid>
        </Grid>
    )
}

const mapDispatchToProps = {
    addTodo,
}

export default connect(null, mapDispatchToProps)(AddForm)