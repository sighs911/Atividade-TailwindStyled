import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import {
	Container,
	InputArea,
	Input,
	Button,
	Card,
	Avatar,
	Name,
	Bio,
	Repos,
	GithubLink,
} from "./StyledStyles";

interface GitHubUser {
	avatar_url: string;
	name: string;
	bio: string;
	public_repos: number;
	html_url: string;
}

function Styled() {
	const [userData, setUserData] = useState<GitHubUser | null>(null);
	const [username, setUsername] = useState("");
	const navigate = useNavigate();
	const fetchUser = async () => {
		try {
			const response = await axios.get<GitHubUser>(
				`https://api.github.com/users/${username}`
			);
			setUserData(response.data);
		} catch (error) {
			console.error("Erro ao buscar usuário:", error);
			setUserData(null);
		}
	};

	return (
		<Container>
			<InputArea>
				<Input
					type="text"
					placeholder="Digite o username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Button onClick={fetchUser}>Buscar</Button>
			</InputArea>

			{userData && (
				<Card>
					<Avatar src={userData.avatar_url} alt="Profile" />
					<Name>{userData.name || "Nome não disponível"}</Name>
					<Bio>{userData.bio || "Bio não disponível"}</Bio>
					<Repos>{userData.public_repos} repositórios públicos</Repos>
					<GithubLink
						href={userData.html_url}
						target="_blank"
						rel="noopener noreferrer"
					>
						Ver no GitHub
					</GithubLink>
					<Button onClick={() => navigate("/")}>Trocar para Tailwind</Button>
				</Card>
			)}
		</Container>
	);
}

export default Styled;
