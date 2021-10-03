module.exports = async (client) => {
  client.Ready = true, 
  client.user.setPresence({
    status: "idle",  // You can show online, idle, and dnd
    activity: {
        name: `Cord DJ | -help | Releasing Soon.`,  // The message shown
        type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING,
    }
});




    client.Manager.init(client.user.id);
    client.log("     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")
    client.log("     ┃ Successfully Logged in as "  + client.user.tag    )
    client.log("     ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛")
 // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.RegisterSlashCommands();
};

