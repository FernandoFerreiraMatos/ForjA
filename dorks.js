const allDorks = [
    {
        "name": "Arquivos de Configuração",
        "description": "Busca .env / credenciais expostas.",
        "dork": "ext:env DB_PASSWORD",
        "tags": ["Config", "Vazamentos"]
    },
    {
        "name": "Painéis Administrativos",
        "description": "Procura por subdomínios ou pastas de admin.",
        "dork": "inurl:admin login",
        "tags": ["Admin"]
    },
    {
        "name": "Diretórios Abertos",
        "description": "Lista pastas expostas no servidor.",
        "dork": "intitle:index.of",
        "tags": ["Arquivos", "Config"]
    }
];
