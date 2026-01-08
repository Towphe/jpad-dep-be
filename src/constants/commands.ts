
type CommandType = {
    name: string,
    description: string
}

const commands: CommandType[] = [
    {
        name: "restaurant_search",
        description: "the command requests to find restaurants and other food establishments."
    }
    // add other command types here (e.g. Place Details)
]
export default commands;