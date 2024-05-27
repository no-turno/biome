import { useReplit } from "@replit/extensions-react";

function Index() {
	const { replit } = useReplit();
	const out = replit.exec.exec("bun -v");
	return <p>{out}</p>;
}

export default Index;
