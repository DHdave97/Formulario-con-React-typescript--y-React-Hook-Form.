import { Card, CardContent, Grid, InputAdornment, TextField } from '@material-ui/core';
import React from 'react'
import { TProductoForm } from '../../state/useProductoState';
import ConnectForm from './ConnectForm';

export type TProductoGeneralProps = {};

export const ProductoGeneral:React.FC<TProductoGeneralProps>=()=> {
    return (
        <ConnectForm<TProductoForm>>
            {({errors,getErrorMessage,onFocus,TypedController})=> {
                return(
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <TypedController
                                                {...onFocus(errors.name)}
                                                name={"name"}
                                                rules={{required:true}}
                                                render={(typedProps)=>(
                                                    <TextField
                                                        {...typedProps}
                                                        id="name"
                                                        label="Nombre del Producto"
                                                        variant="outlined"
                                                        error={!!errors.name}
                                                        required
                                                        fullWidth
                                                        margin="normal"
                                                        helperText={
                                                            !!errors.name && 
                                                            getErrorMessage(errors.name)
                                                        }
                                                    />
                                                )}
                                            />
                                           
                                        </Grid>
                                        <Grid item xs={6}>
                                        <TypedController
                                                {...onFocus(errors.price?.unit)}
                                                name={["price","unit"]}
                                                rules={{required:true}}
                                                render={(typedProps)=>(
                                                    <TextField
                                                        {...typedProps}
                                                        id="unit"
                                                        type="number"
                                                        label="Precio unitario"
                                                        variant="outlined"
                                                        error={!!errors.price?.unit}
                                                        required
                                                        fullWidth
                                                        margin="normal"
                                                        helperText={
                                                            !!errors.price?.unit && 
                                                            getErrorMessage(errors.price?.unit)
                                                        }
                                                    />
                                                )}
                                            />
                                         
                                        </Grid>
                                        <Grid item xs={6}>
                                        <TypedController
                                                {...onFocus(errors.price?.unit)}
                                                name={["price","discount"]}
                                                rules={{required:true}}
                                                render={(typedProps)=>(
                                                    <TextField
                                                        {...typedProps}
                                                        id="discount"
                                                        type="number"
                                                        label="Descuento"
                                                        variant="outlined"
                                                        error={!!errors.price?.discount}
                                                        required
                                                        fullWidth
                                                        margin="normal"
                                                        helperText={
                                                            !!errors.price?.discount && 
                                                            getErrorMessage(errors.price?.discount)
                                                        }
                                                    />
                                                )}
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                )
            }
            }
        </ConnectForm>
    )
}

export default ProductoGeneral