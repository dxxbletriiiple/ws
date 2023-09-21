//import WebSocketServer from 'ws';
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer(
	{
		port: 4200,
	},
	() => console.log('Server started on port: 4200'),
);

const someMsg = {
	messageType: 'do',
	do: 'log',
	data: {
		id: 1,
		title: 'delectus aut autem',
		completed: false,
	},
};

wss.on('connection', (ws) => {
	ws.send(JSON.stringify(someMsg));
	ws.addEventListener('message', (d) => {
		// ^?

		const data = JSON.parse(d.data);

		if (data && data.messageType === 'do') {
			// ^?
			switch (data.do) {
				case 'log': {
					console.table(data);
					break;
				}
				case 'fetch': {
					console.log('fetching...');
				}
			}
		}
	});
});

//wss.on('message', (msg) => {
//	const data = JSON.parse(msg.data);

//	if (data && data.messageType === 'do') {
//		switch (data.do) {
//			case 'log': {
//				console.table(data);
//				break;
//			}
//			case 'fetch': {
//				console.log('fetching...');
//			}
//		}
//	}
//});

/*
const MessageEvent =  {
	[Symbol(kTarget)]: <ref *1> WebSocket {
	  _events: [Object: null prototype] {
		close: [Function (anonymous)],
		message: [Function]
	  },
	  _eventsCount: 2,
	  _maxListeners: undefined,
	  _binaryType: 'nodebuffer',
	  _closeCode: 1006,
	  _closeFrameReceived: false,
	  _closeFrameSent: false,
	  _closeMessage: <Buffer >,
	  _closeTimer: null,
	  _extensions: {},
	  _paused: false,
	  _protocol: '',
	  _readyState: 1,
	  _receiver: Receiver {
		_writableState: [WritableState],
		_events: [Object: null prototype],
		_eventsCount: 6,
		_maxListeners: undefined,
		_binaryType: 'nodebuffer',
		_extensions: {},
		_isServer: true,
		_maxPayload: 104857600,
		_skipUTF8Validation: false,
		_bufferedBytes: 0,
		_buffers: [],
		_compressed: false,
		_payloadLength: 94,
		_mask: <Buffer 24 e8 26 9f>,
		_fragmented: 0,
		_masked: true,
		_fin: true,
		_opcode: 1,
		_totalPayloadLength: 0,
		_messageLength: 0,
		_fragments: [],
		_state: 4,
		_loop: true,
		[Symbol(kCapture)]: false,
		[Symbol(websocket)]: [Circular *1]
	  },
	  _sender: Sender {
		_extensions: {},
		_socket: [Socket],
		_firstFragment: true,
		_compress: false,
		_bufferedBytes: 0,
		_deflating: false,
		_queue: []
	  },
	  _socket: Socket {
		connecting: false,
		_hadError: false,
		_parent: null,
		_host: null,
		_closeAfterHandlingError: false,
		_readableState: [ReadableState],
		_events: [Object: null prototype],
		_eventsCount: 4,
		_maxListeners: undefined,
		_writableState: [WritableState],
		allowHalfOpen: true,
		_sockname: null,
		_pendingData: null,
		_pendingEncoding: '',
		server: [Server],
		_server: [Server],
		parser: null,
		on: [Function (anonymous)],
		addListener: [Function (anonymous)],
		prependListener: [Function: prependListener],
		setEncoding: [Function: socketSetEncoding],
		_paused: false,
		timeout: 0,
		[Symbol(async_id_symbol)]: 25,
		[Symbol(kHandle)]: [TCP],
		[Symbol(lastWriteQueueSize)]: 0,
		[Symbol(timeout)]: null,
		[Symbol(kBuffer)]: null,
		[Symbol(kBufferCb)]: null,
		[Symbol(kBufferGen)]: null,
		[Symbol(kCapture)]: false,
		[Symbol(kSetNoDelay)]: true,
		[Symbol(kSetKeepAlive)]: false,
		[Symbol(kSetKeepAliveInitialDelay)]: 0,
		[Symbol(kBytesRead)]: 0,
		[Symbol(kBytesWritten)]: 0,
		[Symbol(websocket)]: [Circular *1]
	  },
	  _isServer: true,
	  [Symbol(kCapture)]: false
	},
	[Symbol(kType)]: 'message',
	[Symbol(kData)]: '{"messageType":"do","do":"log","data":{"id":1,"title":"delectus aut autem","completed":false}}'
  }
  </Buffer>
  MessageEvent {
	[Symbol(kTarget)]: <ref *1> WebSocket {
	  _events: [Object: null prototype] {
		close: [Function (anonymous)],
		message: [Function]
	  },
	  _eventsCount: 2,
	  _maxListeners: undefined,
	  _binaryType: 'nodebuffer',
	  _closeCode: 1006,
	  _closeFrameReceived: false,
	  _closeFrameSent: false,
	  _closeMessage: <Buffer >,
	  _closeTimer: null,
	  _extensions: {},
	  _paused: false,
	  _protocol: '',
	  _readyState: 1,
	  _receiver: Receiver {
		_writableState: [WritableState],
		_events: [Object: null prototype],
		_eventsCount: 6,
		_maxListeners: undefined,
		_binaryType: 'nodebuffer',
		_extensions: {},
		_isServer: true,
		_maxPayload: 104857600,
		_skipUTF8Validation: false,
		_bufferedBytes: 0,
		_buffers: [],
		_compressed: false,
		_payloadLength: 94,
		_mask: <Buffer 3a 01 92 e9>,
		_fragmented: 0,
		_masked: true,
		_fin: true,
		_opcode: 1,
		_totalPayloadLength: 0,
		_messageLength: 0,
		_fragments: [],
		_state: 4,
		_loop: true,
		[Symbol(kCapture)]: false,
		[Symbol(websocket)]: [Circular *1]
	  },
	  _sender: Sender {
		_extensions: {},
		_socket: [Socket],
		_firstFragment: true,
		_compress: false,
		_bufferedBytes: 0,
		_deflating: false,
		_queue: []
	  },
	  _socket: Socket {
		connecting: false,
		_hadError: false,
		_parent: null,
		_host: null,
		_closeAfterHandlingError: false,
		_readableState: [ReadableState],
		_events: [Object: null prototype],
		_eventsCount: 4,
		_maxListeners: undefined,
		_writableState: [WritableState],
		allowHalfOpen: true,
		_sockname: null,
		_pendingData: null,
		_pendingEncoding: '',
		server: [Server],
		_server: [Server],
		parser: null,
		on: [Function (anonymous)],
		addListener: [Function (anonymous)],
		prependListener: [Function: prependListener],
		setEncoding: [Function: socketSetEncoding],
		_paused: false,
		timeout: 0,
		[Symbol(async_id_symbol)]: 25,
		[Symbol(kHandle)]: [TCP],
		[Symbol(lastWriteQueueSize)]: 0,
		[Symbol(timeout)]: null,
		[Symbol(kBuffer)]: null,
		[Symbol(kBufferCb)]: null,
		[Symbol(kBufferGen)]: null,
		[Symbol(kCapture)]: false,
		[Symbol(kSetNoDelay)]: true,
		[Symbol(kSetKeepAlive)]: false,
		[Symbol(kSetKeepAliveInitialDelay)]: 0,
		[Symbol(kBytesRead)]: 0,
		[Symbol(kBytesWritten)]: 0,
		[Symbol(websocket)]: [Circular *1]
	  },
	  _isServer: true,
	  [Symbol(kCapture)]: false
	},
	[Symbol(kType)]: 'message',
	[Symbol(kData)]: '{"messageType":"do","do":"log","data":{"id":1,"title":"delectus aut autem","completed":false}}'
  }
*/
