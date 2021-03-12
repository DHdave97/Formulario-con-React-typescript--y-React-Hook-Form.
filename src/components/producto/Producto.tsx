import React from 'react'
import { Container,Box, Grid, Button } from '@material-ui/core';
import { useProductoState } from '../../state/useProductoState';
import { FormProvider } from 'react-hook-form';
import ProductoGeneral from './ProductoGeneral';
import ProductoStatus from './ProductoStatus';

export interface IProductoStateProps {}

export type TProductoProps = IProductoStateProps;

export const Producto:React.FC<TProductoProps> =()=> {
    const {form,actions} = useProductoState()
    return (
        <Container maxWidth="md">
            <Box mt={5} mb={5}>
                <h1>Producto con Form-Hook</h1>
            </Box>

            <FormProvider {...form}>
                <Grid container>
                    <Grid item xs={12}>
                        <ProductoGeneral/>
                        <ProductoStatus/>
                        <Box display="flex" justifyContent="flex-end" mt={3}>
                            <Box ml={2}>
                                <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disableElevation
                                onClick={form.handleSubmit(actions.handleSubmitForm)}
                                >
                                Guardar
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </FormProvider>
        </Container>
    )
}
