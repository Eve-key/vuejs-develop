//exportを記載することにより他のクラスから呼び出しが可能になる
export interface Profile {
    name: string;
    age: number;
    image: string;
    position: Position;
    count: number;
}

interface Position {
	position: string;
	top: string;
	left: string;
	color: string;
}
