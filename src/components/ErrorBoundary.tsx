import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = {
  children: ReactNode
}

type State = {
  message: string | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { message: null }

  static getDerivedStateFromError(error: Error): State {
    return { message: error.message || '页面出错了' }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error(error, info.componentStack)
  }

  render(): ReactNode {
    if (this.state.message) {
      return (
        <div className="shell">
          <main className="page">
            <p className="error">打开失败：{this.state.message}</p>
            <p className="hint">进度还在这台手机上。点下面再打开一次。</p>
            <p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => window.location.reload()}
              >
                再试一次
              </button>
            </p>
          </main>
        </div>
      )
    }
    return this.props.children
  }
}
