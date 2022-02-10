const UsedColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

//Alterando o Tema || Changing the theme 

function changeTheme(event) 
{
    if( event.matches ) {
        // O tema é o dark | The theme is dark
        document.body.style.setProperty('--ColorB', '#232323');
        document.body.style.setProperty('--ColorA', '#fff');
    } else {
        // O tema é o light | The theme is light
        document.body.style.setProperty('--ColorA', '#232323');
        document.body.style.setProperty('--ColorB', '#fff');
    }
}

// Escuta a mudança de tema no sistema || Listen for the theme change in the system 
UsedColorScheme.addListener(changeTheme);

// Altera o tema conforme o tema do usuário || Change theme as per user theme
changeTheme(UsedColorScheme);