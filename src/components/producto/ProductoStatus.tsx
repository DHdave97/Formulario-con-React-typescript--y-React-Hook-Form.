import { Card, CardContent, Grid, InputAdornment, TextField, Typography,Switch } from '@material-ui/core';
import React from 'react'
import { TProductoForm } from '../../state/useProductoState';
import ConnectForm from './ConnectForm';
import { useWatch } from "react-hook-form";
export type TProductoStatusProps = {};

export const ProductoStatus:React.FC<TProductoStatusProps>=()=> {
    const status = useWatch({ name: "status" }) as boolean;
    return (
        <ConnectForm<TProductoForm>>
            {({errors,getErrorMessage,onFocus,TypedController})=> {
                console.log(status)
                return(
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Card>
                                <CardContent>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} style={{display:'flex'}}>
                                            <Typography variant="h6" color="primary">
                                                Estado del producto *
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} style={{display:'flex',alignItems:'center'}}>
                                            <TypedController
                                                {...onFocus(errors.status)}
                                                name={"status"}
                                                render={(typedProps)=>(
                                                    <Switch
                                                        id="status"
                                                        {...typedProps}
                                                        onChange={e => typedProps.onChange(e.target.checked)}
                                                        checked={typedProps.value}
                                                    />
                                                )}
                                            />
                                           <p>{status === true ? 'El producto será visible en la tienda.':'El producto no será visible al Cliente.'}</p>
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

export default ProductoStatus