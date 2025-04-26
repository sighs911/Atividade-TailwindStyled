import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

interface GitHubUser {
	avatar_url: string;
	name: string;
	bio: string;
	public_repos: number;
	html_url: string;
}

function Tailwind() {
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
		<div className="bg-[#242424] w-screen h-screen flex flex-col items-center justify-center p-4 gap-6">
			<div className="flex gap-2">
				<input
					type="text"
					placeholder="Digite o username"
					className="p-2 rounded-md bg-[#E1F4F3]"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<button
					onClick={fetchUser}
					className="bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer"
				>
					Buscar
				</button>
			</div>

			{userData && (
				<div className="bg-[#E1F4F3] w-[300px] h-[450px] rounded-xl flex flex-col items-center p-4 gap-3">
					<img
						src={userData.avatar_url}
						alt="Profile"
						className="w-24 h-24 rounded-full object-cover"
					/>

					<h1 className="text-black border-t border-b w-full text-center py-2">
						{userData.name || "Nome não disponível"}
					</h1>

					<p className="text-black text-center px-2">
						{userData.bio || "Bio não disponível"}
					</p>

					<h2 className="text-black border-t border-b w-full text-center py-2">
						{userData.public_repos} repositórios públicos
					</h2>

					<a
						href={userData.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-green-700 text-white px-4 py-1 rounded-md mt-2 text-sm"
					>
						Ver no GitHub
					</a>
					<button
						onClick={() => navigate("/styled")}
						className="bg-green-700 text-white px-4 py-2 rounded-md cursor-pointer"
					>
						Trocar para Styled
					</button>
				</div>
			)}
		</div>
	);
}

export default Tailwind;
