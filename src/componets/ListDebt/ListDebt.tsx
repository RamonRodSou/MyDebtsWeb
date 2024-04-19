import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';

export default function PinnedSubheaderList() {
    return (
        <List
            sx={{
                bgcolor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                gap: '.3rem'

            }}
        >
            {[0, 1, 2].map((item) => (
                <ListItem key={item}
                    sx={{
                        color: '#000',
                        border: 'none',
                        boxShadow: '.5px .1px 2px black',
                        borderRadius: '3px',
                        cursor: 'pointer',

                    }}>
                    <Box sx={{
                    }}>
                        <ListItemText primary={`Conta de Agua ${item}`} />
                        <p
                            style={{
                                padding: '0',
                                margin: '0',
                                fontSize:'12px',
                                color:"#7c8496"
                            }}
                            >A vencer: 13/10/24
                        </p>
                    </Box>
                    <Box>

                    </Box>
                </ListItem>
            ))
            }
        </List >
    );
}