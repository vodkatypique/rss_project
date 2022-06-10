import { Container, createStyles, Grid, Image } from "@mantine/core";
import { AlignCenter } from "tabler-icons-react";


const useStyles = createStyles((theme) => ({

    container: {
      flex: 1,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },

    imageBlock: {
        borderRadius: 10,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        height: 'auto',

    },

    articleBlock:{
        borderRadius: 10,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        marginLeft: 1,
        marginRight: 1,
        padding: 14,
    },
    topSublock: {
        padding: 0,
        marginBottom: 5
    },
    titleSublock:{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        borderRadius: 10,
    },

    btnSublock: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        borderRadius: 10,
    },

    textSublock: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        borderRadius: 10,
        minHeight: 200,
    },

  }));

export function ArticleCard(){
    const { classes, cx } = useStyles();
    

    return (
        <Container size={950} px={0} className={classes.container}>
                <Grid columns={100} style={{marginTop: '14px', marginBottom: '14px', marginLeft: '8px', marginRight: '8px'}}>
                    <Grid.Col span={24} className={classes.imageBlock}>
                                
                            <Image
                                radius="md"
                                fit="contain"
                                src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                                alt="Random unsplash image"  
                            />
                        
                            
                    </Grid.Col>
                    <Grid.Col span={70} className={classes.articleBlock}>
                        <Grid columns={1}>
                            <Grid.Col span={1} className={classes.topSublock}>
                                <Grid columns={24} style={{margin: 1 }}>
                                    <Grid.Col span={20} className={classes.titleSublock}>
                                        titre de l'article
                                    </Grid.Col>
                                    <Grid.Col span={3} offset={1} className={classes.btnSublock}>x x</Grid.Col>
                                </Grid>
                            </Grid.Col>
                            
                            <Grid.Col span={1} className={classes.textSublock}>3</Grid.Col>
                        </Grid>
                    </Grid.Col>
                    <Grid.Col span={2}>3</Grid.Col>
                </Grid>
        </Container>
    )
}